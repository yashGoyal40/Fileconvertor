import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md">
        <Card className="bg-neutral-900">
          <CardHeader>
            <CardTitle className="text-white">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full rounded border border-gray-700 bg-white p-2 "
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm text-white ">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded border border-gray-700 bg-white p-2 "
                    required
                  />
                </div>
                <div className="text-right text-sm text-gray-400">
                  <a href="#" className="hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Button variant="outline" className="w-full text-black">Login</Button>
            <div className="text-gray-400">
              <span>Don't have an account? </span>
              <a
                href="#signup"
                className="text-primary underline hover:no-underline"
              >
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
