import React from "react";
import {Context, LinkContent, LinksSection} from "./Navbar.styles";
import Link from "next/link";
import {useRouter} from "next/router";

const Navbar: React.FC = () => {
    const router = useRouter();

    function isLinkActive(url: string) {
        return url === router.pathname;
    }

    return (
        <Context>

            <LinksSection>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <LinkContent active={isLinkActive('/')}>
                        Home
                    </LinkContent>
                </Link>
                <Link href="/flow" style={{ textDecoration: 'none' }}>
                    <LinkContent active={isLinkActive('/flow')}>
                        Flow
                    </LinkContent>
                </Link>
            </LinksSection>

        </Context>
    )
}

export default Navbar;