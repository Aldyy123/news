import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: 'Detail News',
};
export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
        </div>
    )
}