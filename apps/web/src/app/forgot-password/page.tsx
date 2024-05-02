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
import useForgotPassword from '@/hooks/api/auth/useForgotPassword';
import { Loader2 } from 'lucide-react';

const ForgotPassword = () => {
  const { ForgotPassword, isLoading } = useForgotPassword();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema,
      onSubmit: ({ email }) => {
        ForgotPassword(email);
      },
    });
  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card className="w-[450px] ">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary ">
              Forgot Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="email"
                  type="text"
                  label="email"
                  placeholder="Email"
                  value={values.email}
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
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

export default ForgotPassword;
