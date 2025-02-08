import "@mantine/core/styles.css";
import { Group, Text, Title } from "@mantine/core";

import { Burger } from "@mantine/core";

import { IoMdRose } from "react-icons/io";

import * as classes from "./Header.css";

const Header = ({ opened, toggle }) => {
    return (
        <Title className={classes.title} ta="center" p={16}>
            <Group>
                {/* <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                /> */}
                <Group>
                    <IoMdRose
                        style={{
                            width: 30,
                            height: 30,
                            color: "#e9868a",
                        }}
                    />
                    <Text
                        inherit
                        variant="gradient"
                        component="span"
                        gradient={{ from: "pink", to: "yellow" }}
                    >
                        FANT BACH
                    </Text>
                </Group>
            </Group>
        </Title>

        // <Group
        //     style={{
        //         backgroundColor: "#f9f9f9",
        //     }}
        // >

        //     <Burger
        //         opened={opened}
        //         onClick={toggle}
        //         hiddenFrom="sm"
        //         size="sm"
        //     />
        //     <Group>
        //         <IoMdRose
        //             style={{
        //                 width: 30,
        //                 height: 30,
        //                 color: "#e9868a",
        //             }}
        //         />
        //         <Text
        //             inherit
        //             variant="gradient"
        //             component="span"
        //             gradient={{ from: "pink", to: "yellow" }}
        //         >
        //             Mantine
        //         </Text>
        //     </Group>
        // </Group>
    );
};

export default Header;
