"use client";

import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { providers } from "@/lib/auth";
import { redirect } from "next/navigation";

const Login: React.FC = () => {
  const session = useSession();

  useEffect(() => {
    if (session) {
      toast("You are already logged in.");
      redirect("/");
    }
  }, [session]);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Card className="max-w-[300px] w-2/3">
        <CardHeader className="flex gap-3 items-center justify-center">
          <h2 className="text-xl">Login</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-y-2">
          {providers.map((provider) => (
            <Button
              key={`login-with-provider-button-${provider.id}`}
              onClick={() => {
                signIn("github").then(() => toast("Logged in successfully."));
              }}
            >
              Login with {provider.name}
            </Button>
          ))}
        </CardBody>
      </Card>
    </section>
  );
};

export default Login;
