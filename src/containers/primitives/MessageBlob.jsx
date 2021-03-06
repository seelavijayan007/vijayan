/* eslint-disable */

import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const MessageBlob = styled.div`
  padding: .75rem;
  color: #fff;
  font-weight:300;
  background: ${props => props.theme.blobColor};
  display: inline-block;
  border-radius: 0 15px 15px 15px;
  font-family: ${props => props.theme.font};
  margin-bottom: 1rem;
  animation: ${fadeIn} 250ms;
`;

const MessageBlobBot = MessageBlob;

const MessageBlobUser = styled(MessageBlob)`
  right: 0;
  background: #2ea7cc;
  color: #fff;
  float: right;
  border-radius: 15px 0 15px 15px;
  margin-right: .25rem;
`;

export {
  MessageBlobBot,
  MessageBlobUser,
}
