import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import SignUpForm from "@/features/authentication/sign-up/SignUpForm";

const SignUpPage = () => {
    return (
        <Card className="w-[400px] md:w-[480px]">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Register Here</CardTitle>
                <CardDescription>How are you doing?</CardDescription>
            </CardHeader>
            <CardContent>
                <SignUpForm />
            </CardContent>
        </Card>
    );
};
export default SignUpPage;
