import { Button, Group, Avatar, Stack, Text, Overlay } from "@mantine/core";

import { scoreMap } from "../../constants";

const DraftingRow = ({ contestant, onButtonClick }) => {
    const { firstName, lastName, age, occupation, images, from, eliminated } =
        contestant;
    const nameKey = `${firstName} ${lastName.at(0)}.`;

    return (
        <Group
            key={lastName}
            justify="space-between"
            pr={16}
            style={{ opacity: eliminated ? 0.33 : 1 }}
        >
            <Group>
                <Button
                    size="xs"
                    radius={"xl"}
                    disabled={eliminated}
                    onClick={() => onButtonClick(contestant)}
                >
                    Draft
                </Button>
                <Avatar size="md" src={images.avatar} />
                <Stack gap={0}>
                    <Text size="sm" fw={600}>
                        {nameKey}
                    </Text>

                    <Text size="xs" c="dimmed">
                        {occupation}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {age} - {from.state.abbreviation}
                    </Text>
                </Stack>
            </Group>
            <Stack gap={0}>
                <Text size="sm" fw={700} ta="center">
                    PTS
                </Text>
                <Text size="sm" fw={600} ta="center">
                    {scoreMap[nameKey]}
                </Text>
            </Stack>
        </Group>
    );
};

export default DraftingRow;
