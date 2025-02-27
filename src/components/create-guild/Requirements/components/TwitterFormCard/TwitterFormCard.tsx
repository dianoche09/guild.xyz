import { Divider, FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"
import StyledSelect from "components/common/StyledSelect"
import { useController, useFormState } from "react-hook-form"
import { Requirement } from "types"
import FollowerCount from "./components/FollowerCount"
import Following from "./components/Following"
import SearchValue from "./components/SearchValue"

type Props = {
  index: number
  field: Requirement
}

const twitterRequirementTypes = [
  {
    label: "Follow somebody",
    value: "TWITTER_FOLLOW",
    TwitterRequirement: Following,
  },
  {
    label: "Number of followers",
    value: "TWITTER_FOLLOWER_COUNT",
    TwitterRequirement: FollowerCount,
  },
  {
    label: "Username includes text",
    value: "TWITTER_NAME",
    TwitterRequirement: SearchValue,
  },
  {
    label: "Bio includes text",
    value: "TWITTER_BIO",
    TwitterRequirement: SearchValue,
  },
]

const TwitterFormCard = ({ index, field }: Props) => {
  const {
    field: { name, onBlur, onChange, ref, value },
  } = useController({
    name: `requirements.${index}.type`,
    rules: { required: "It's required to select a type" },
  })

  const { errors } = useFormState()

  const selected = twitterRequirementTypes.find((reqType) => reqType.value === value)

  return (
    <>
      <FormControl isInvalid={!!errors?.requirements?.[index]?.type?.message}>
        <FormLabel>Type</FormLabel>
        <StyledSelect
          options={twitterRequirementTypes}
          name={name}
          onBlur={onBlur}
          onChange={(newValue: { label: string; value: string }) => {
            onChange(newValue?.value)
          }}
          ref={ref}
          value={selected}
        />

        <FormErrorMessage>
          {errors?.requirements?.[index]?.type?.message}
        </FormErrorMessage>
      </FormControl>

      {selected?.TwitterRequirement && (
        <>
          <Divider />
          <selected.TwitterRequirement index={index} field={field} />
        </>
      )}
    </>
  )
}

export default TwitterFormCard
