import "@mantine/core/styles.css";
import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Container,
    Drawer,
    Group,
    Image,
    MantineProvider,
    Overlay,
    Skeleton,
    Stack,
    Text,
} from "@mantine/core";
import { theme } from "./theme";
import { ColorSchemeToggle } from "./ColorSchemeToggle/ColorSchemeToggle";

import _ from "lodash";

import { contestants, ROSTERS, CONTESTANTS_WITH_SCORES } from "./constants.js";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Header from "./components/Header/Header";
import RosterCard from "./components/RosterCard/RosterCard";
import ScoreCard from "./components/ScoreCard/ScoreCard";
import DraftingRow from "./components/DraftingRow/DraftingRow.js";
import { useState } from "react";

const mode = "DRAFT";

export default function App() {
    const [opened, { toggle }] = useDisclosure();
    const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

    const [draftedRoster, setDraftedRoster] = useState(ROSTERS);
    const [currentRound, setCurrentRound] = useState(1);

    const teamCount = 2;
    const teamRosesSnakePicks = [1, 4, 5, 8, 9, 12];

    const goToNextRound = (contestant) => {
        const draftingTeam = teamRosesSnakePicks.includes(currentRound)
            ? "ROSES"
            : "RINGS";

        setDraftedRoster({
            ...draftedRoster,
            [draftingTeam]: [...draftedRoster[draftingTeam], contestant],
        });

        setCurrentRound(currentRound + 1);

        console.log(55, draftedRoster, currentRound, draftingTeam);
    };

    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Header opened={opened} toggle={toggle} />
                </AppShell.Header>

                <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
                <AppShell.Main>
                    {/* <ColorSchemeToggle /> */}
                    <Stack gap={"sm"}>
                        <ScoreCard draftedRoster={draftedRoster} />
                        {mode === "DRAFT" && (
                            <Button color="green" my={8} onClick={open2}>
                                Begin Draft
                            </Button>
                        )}

                        <Stack>
                            {_.times(6).map((i) => (
                                <Group gap={"xs"} mb={0}>
                                    <RosterCard
                                        contestant={draftedRoster.ROSES[i]}
                                    />
                                    <RosterCard
                                        textAlign="right"
                                        contestant={draftedRoster.RINGS[i]}
                                    />
                                </Group>
                            ))}
                        </Stack>
                    </Stack>
                    <Drawer
                        opened={opened2}
                        onClose={close2}
                        title="Drafting - (Team Roses' Turn)"
                        position="bottom"
                    >
                        <Stack gap="lg">
                            {_.orderBy(
                                CONTESTANTS_WITH_SCORES,
                                ({ firstName, lastName, eliminated }) => {
                                    return [eliminated, firstName, lastName];
                                }
                            ).map((contestant) => (
                                <DraftingRow
                                    contestant={contestant}
                                    onButtonClick={goToNextRound}
                                />
                            ))}
                        </Stack>
                    </Drawer>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
