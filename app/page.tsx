import { cn } from "@/lib/utils";
import { archivo } from "./layout";

export default function Home() {
    return (
        <main className="">
            <h1 className="xl:text-[14rem] overflow-clip md:text-6xl text-4xl lg:text-center block xl:mt-36">
                <span className={cn([archivo.className, "gradient-text"])}>
                    <i>TEAM SMP</i>
                </span>
            </h1>
            <div id="main">
                <p className="tagline text-center mx-auto text-6xl">
                    <b>UNITE, SURVIVE, THRIVE!</b>
                </p>
                <p className="lead">
                    The Team SMP is a survival Minecraft server run by
                    JunglTemple and XxDreamXxXx.
                </p>
            </div>
        </main>
    );
}
