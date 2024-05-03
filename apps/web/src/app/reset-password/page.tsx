'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { notFound, useSearchParams } from 'next/navigation';
import useResetPassword from '@/hooks/api/auth/useResetPassword';
import { Loader2 } from 'lucide-react';
// import { validationSchema } from './validationSchema';

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  if (!token) {
    notFound();
  }

  const { resetPassword, isLoading } = useResetPassword();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        password: '',
        confirmPassword: '',
      },
      validationSchema,
      onSubmit: ({ password }) => {
        resetPassword(password, token);
      },
    });
  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card className="w-[450px] ">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary ">
              Reset Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={values.password}
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormInput
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  error={errors.confirmPassword}
                  isError={
                    !!touched.confirmPassword && !!errors.confirmPassword
                  }
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <Button
                  disabled={isLoading}
                  type="submit"
                  className=" mt-6 w-full text-white"
                >
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button className=" text-white">Register</Button> */}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default ResetPassword;
