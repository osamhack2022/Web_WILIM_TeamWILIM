import React from "react";
import styled from "styled-components";
import { Button } from "../atom/button";
import { Flex } from "../atom/flex";
import { Input } from "../atom/input";
import { BaseStyles } from "../theme";

export const IdInputArea = () => {
  return (
    <>
      <Flex justifyContent='center' alignItems='center'>
        <Input type="text" placeholder='Email' style={{ marginRight: '10px' }}/>
        <Button innerText='Submit' />
      </Flex>
    </>
  );
};
