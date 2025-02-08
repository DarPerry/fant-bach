import { Badge, Box, Card, Group, Stack, Text } from "@mantine/core";
import _ from "lodash";

const ScoreCard = ({ draftedRoster }) => {
    const stackWidth = 32;

    console.log(draftedRoster);

    return (
        <Card shadow="sm" padding="md" radius="md" withBorder>
            <Group justify="space-around">
                <Stack gap={1} align="center">
                    <Text size="xl" fw={600} ta="right">
                        {_.sumBy(draftedRoster.ROSES, "score")}
                    </Text>
                    <Group gap={6}>
                        <Badge color="pink">Team Roses</Badge>
                    </Group>
                </Stack>
                <Box>
                    <Text
                        bg="grey"
                        p={6}
                        style={{ borderRadius: 8 }}
                        w={32}
                        ta="center"
                        fw={600}
                        size={"sm"}
                    >
                        VS
                    </Text>
                </Box>
                <Stack gap={1} align="center">
                    <Text size="xl" fw={600}>
                        {_.sumBy(draftedRoster.RINGS, "score")}
                    </Text>
                    <Group gap={6}>
                        <Badge color="blue">Team Rings</Badge>
                    </Group>
                </Stack>
            </Group>
        </Card>
    );
};

export default ScoreCard;
