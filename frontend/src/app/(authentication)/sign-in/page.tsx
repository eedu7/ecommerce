import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import SignInForm from "@/features/authentication/sign-in/SignInForm";

const SignInPage = () => {
    return (
        <Card className="w-[400px] md:w-[480px]">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>We are happy for your return?</CardDescription>
            </CardHeader>
            <CardContent>
                <SignInForm />
            </CardContent>
        </Card>
    );
};
export default SignInPage;
