import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface IPasswordInputProps {
  register: any;
  errors: any;
  fieldName: string;
  props?: object;
}

export const PasswordInput = ({
  register,
  errors,
  fieldName,
  props,
}: IPasswordInputProps) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!errors[fieldName]}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <LockIcon color="white" marginLeft="4" fontSize="18" marginTop="3" />
        </InputLeftElement>
        <Input
          {...register(fieldName, props)}
          type={show ? "text" : "password"}
          placeholder="Password"
          variant="outline"
          name={fieldName}
        />
        <InputRightElement width="4.5rem">
          {show ? (
            <ViewOffIcon
              onClick={handleClick}
              color="white"
              cursor="pointer"
              marginTop="3"
            />
          ) : (
            <ViewIcon
              onClick={handleClick}
              color="white"
              cursor="pointer"
              marginTop="3"
            />
          )}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errors[fieldName]?.message}</FormErrorMessage>
    </FormControl>
  );
};
