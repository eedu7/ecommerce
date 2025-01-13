import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import SignUpForm from "@/features/authentication/SignUpForm";
import SocailAuthButton from "@/features/authentication/social-auth/SocialAuth";

const SignUpPage = () => {
    return (
        <Card className="w-[300px] md:w-[480px]">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Register Here</CardTitle>
                <CardDescription>How are you doing?</CardDescription>
            </CardHeader>
            <CardContent>
                <SignUpForm />
            </CardContent>
            <div className="w-full px-4 pb-4">
                <Separator />
            </div>
            <CardFooter className="w-full">
                <SocailAuthButton />
            </CardFooter>
        </Card>
    );
};
export default SignUpPage;
