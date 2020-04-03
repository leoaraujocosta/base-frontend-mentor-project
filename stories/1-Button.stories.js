import React from "react"
import { action } from "@storybook/addon-actions"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"
import { Button } from "@storybook/react/demo"

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
}

export const Text = () => (
  <Button onClick={action("clicked")} disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Button")}
  </Button>
)

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
