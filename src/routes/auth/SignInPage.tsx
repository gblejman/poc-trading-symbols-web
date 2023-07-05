import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Box, Link, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BaseLayout } from "../../components/BaseLayout";
import { auth, signInWithEmailAndPassword } from "../../services/firebase";
import { config } from "../../services/config";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(2),
});

type Schema = z.infer<typeof schema>;

const defaultValues = {
  email: undefined,
  password: undefined,
};

export const SignInPage = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, formState, setError } = useForm<Schema>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({ email, password }: Schema) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (e) {
      console.log("signin error", { e });

      setError("root.custom", {
        type: "custom",
        message: config.isDev ? e.message : "Invalid email/password",
      });
    }
  };

  return (
    <BaseLayout>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        width={300}
        m={"auto"}
        gap={2}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />

        <LoadingButton
          type="submit"
          variant="outlined"
          disabled={!formState.isValid || formState.isSubmitting}
          loading={formState.isSubmitting}
          fullWidth
        >
          Sign In
        </LoadingButton>

        <Typography variant="caption">
          {formState.errors.root?.custom.message}
        </Typography>

        <Link component={RouterLink} to="/auth/signup">
          Don't have an account?
        </Link>
      </Box>
    </BaseLayout>
  );
};
