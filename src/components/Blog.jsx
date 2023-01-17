import React, { useState } from "react";
import Modal from "./Modal";
import { Box, Button, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import "./Blog.css";
function Blog(props) {
  const [openModal, setIsOpen] = useState(false);

  return (
    <Box ml={5} p={3} width={"90%"} style={{ position: "relative" }}>
      {openModal && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          sillyFunction={() => console.log(openModal)}
          data={props}
          isModalOpened={openModal}
        />
      )}
      <Box direction="row" width={400} align={{ sm: "center", md: "left" }}>
        <Avatar size="lg" name="Dan Abrahmov" src={props.profileImage} mr={3} />
        <Text align="center" mt={4} maxWidth={400} noOfLines={[1]}>
          {props.content}
        </Text>
        <Button
          onClick={() => setIsOpen(true)}
          style={{ position: "absolute", right: -90, bottom: 30 }}
        >
          Open
        </Button>
      </Box>
    </Box>
  );
}

export default Blog;
