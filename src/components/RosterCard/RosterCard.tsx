import {
    Avatar,
    Badge,
    Card,
    Group,
    Image,
    Skeleton,
    Stack,
    Text,
} from "@mantine/core";

import { scoreMap } from "../../constants";

console.log(scoreMap);

const RosterCard = ({ showPlaceholers, contestant }) => {
    const textAlign = "center";

    console.log(12, contestant);

    if (!contestant) {
        return (
            <Card shadow="sm" padding="sm" radius="md" withBorder w={193}>
                <Card.Section>
                    <Skeleton height={71.4} />
                </Card.Section>
                <Stack gap={4} pt={12} align="center" justify="center">
                    <Stack gap={6} align="center" justify="center">
                        <Skeleton height={15.3} width={95} ta="center" />

                        <Stack gap={4} align="center" justify="center">
                            <Skeleton height={11} width={115} ta="center" />

                            <Skeleton height={11} width={145} ta="center" />
                        </Stack>
                    </Stack>
                    <Skeleton height={24.8} width={100} ta={"center"} mt={8} />
                </Stack>
            </Card>
        );
    }

    const {
        firstName,
        lastName,
        age,
        occupation,
        images,
        from,
        score,
        ...rest
    } = contestant;

    console.log(contestant, rest);

    return (
        <>
            {/* <Card shadow="sm" padding="sm" radius="md" withBorder w={193}>
                <Card.Section>
                    <Skeleton height={193} />
                </Card.Section>
                <Stack gap={"xs"} pt={4}>
                    <Stack gap={4}>
                        <Stack gap={0}>
                            <Text size="sm" fw={600} ta={"center"}>
                                Parisa S.
                            </Text>
                            <Stack gap={0}>
                                <Text size="xs" c="dimmed" ta={"center"}>
                                    29 • Birmingham, MI
                                </Text>
                                <Text size="xs" c="dimmed" ta={"center"}>
                                    Pediatric Behavior Analyst
                                </Text>
                            </Stack>
                        </Stack>
                        <Text size="md" fw={700} ta="center">
                            29.8 PTS
                        </Text>
                    </Stack>
                </Stack>
            </Card> */}
            <Card shadow="sm" padding="sm" radius="md" withBorder w={193}>
                <Card.Section>
                    <Image src={images.banner} alt="Norway" fit="contain" />
                </Card.Section>
                <Stack gap={4} pt={8}>
                    <Stack gap={0}>
                        <Text size="sm" fw={600} ta={textAlign}>
                            {firstName} {lastName.at(0)}.
                        </Text>
                        <Stack gap={0}>
                            <Text size="xs" c="dimmed" ta={textAlign}>
                                {age} • {from.city}, {from.state.abbreviation}
                            </Text>
                            <Text size="xs" c="dimmed" ta={textAlign}>
                                {occupation}
                            </Text>
                        </Stack>
                    </Stack>
                    <Text size="md" fw={700} ta="center">
                        {score} PTS
                    </Text>
                </Stack>
            </Card>
        </>
    );
};

export default RosterCard;
