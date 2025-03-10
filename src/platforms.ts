import { ChakraProps } from "@chakra-ui/react"
import useDiscordCardProps, {
  DiscordCardMenu,
  DiscordCardSettings,
} from "components/[guild]/RolePlatforms/components/PlatformCard/components/useDiscordCardProps"
import useGithubCardProps from "components/[guild]/RolePlatforms/components/PlatformCard/components/useGithubCardProps"
import useGoogleCardProps from "components/[guild]/RolePlatforms/components/PlatformCard/components/useGoogleCardProps"
import GoogleCardSettings from "components/[guild]/RolePlatforms/components/PlatformCard/components/useGoogleCardProps/GoogleCardSettings"
import useTelegramCardProps from "components/[guild]/RolePlatforms/components/PlatformCard/components/useTelegramCardProps"
import {
  DiscordLogo,
  GithubLogo,
  GoogleLogo,
  IconProps,
  TelegramLogo,
  TwitterLogo,
} from "phosphor-react"
import { GuildPlatform, PlatformName } from "types"

type PlatformData = {
  icon: (props: IconProps) => JSX.Element
  name: string
  colorScheme: ChakraProps["color"]
  gatedEntity: string
  paramName: string
  cardPropsHook?: (guildPlatform: GuildPlatform) => {
    type: PlatformName
    name: string
    image?: string | JSX.Element
    info?: string
    link?: string
  }
  cardSettingsComponent?: () => JSX.Element
  cardMenuComponent?: (props) => JSX.Element
}

const platforms: Record<PlatformName, PlatformData> = {
  TELEGRAM: {
    icon: TelegramLogo,
    name: "Telegram",
    colorScheme: "TELEGRAM",
    gatedEntity: "group",
    paramName: "telegramId",
    cardPropsHook: useTelegramCardProps,
  },
  DISCORD: {
    icon: DiscordLogo,
    name: "Discord",
    colorScheme: "DISCORD",
    gatedEntity: "server",
    paramName: "discordId",
    cardPropsHook: useDiscordCardProps,
    cardSettingsComponent: DiscordCardSettings,
    cardMenuComponent: DiscordCardMenu,
  },
  GITHUB: {
    icon: GithubLogo,
    name: "GitHub",
    colorScheme: "GITHUB",
    gatedEntity: "repo",
    paramName: "githubId",
    cardPropsHook: useGithubCardProps,
  },
  TWITTER: {
    icon: TwitterLogo,
    name: "Twitter",
    colorScheme: "TWITTER",
    gatedEntity: "account",
    paramName: "twitterId",
  },
  GOOGLE: {
    icon: GoogleLogo,
    name: "Google Workspace",
    colorScheme: "blue",
    gatedEntity: "document",
    paramName: "googleId",
    cardPropsHook: useGoogleCardProps,
    cardSettingsComponent: GoogleCardSettings,
  },
}

export default platforms
