import { InputText } from "../../components/molecules/InputText";
import { Button } from "../../components/atoms/button"
import Link from "next/link";


export const Login = () => {
    return(
        <div className=" bg-orange-500 w-screen h-screen flex justify-center">
            <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
                <aside className="flex justify-center items-center">
                    <img src="/hero-image.svg" alt=""/>
                </aside>
                <main className="flex flex-col justify-center items-center gap-16">
                    <h1 className=" font-bold text-3xl">AirBr</h1>
                    <form className=" flex flex-col w-full gap-4">
                        <InputText label="Email"  type="email"/>
                        <InputText label="Senha" type="password"/>
                       <Button>Log In</Button>
                    </form>
                    <Link href="/register">Criar Conta</Link>
                </main>
            </div>
        </div>
    );
};
