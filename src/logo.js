import React from "react";
import "styled-components/macro";

const Icon = ({ theme }) => (
  <svg
    css={`
      display: block;
      margin: auto;
      padding: 40px 0;
      box-sizing: initial;
    `}
    width={100}
    height={100}
    fill="none"
    viewBox="0 0 512 512"
  >
    <path
      fill={theme.plain.backgroundColor}
      d="M24 72h424v384a31.996 31.996 0 01-9.373 22.627A31.996 31.996 0 01416 488H56a31.997 31.997 0 01-32-32V72z"
    />
    <path
      fill="#333"
      d="M432 24H40a16 16 0 00-16 16v32h424V40a16.002 16.002 0 00-16-16z"
    />
    <path fill="#FF4A46" d="M48 48a8 8 0 1116 0 8 8 0 11-16 0z" />
    <path fill="#FFB83A" d="M80 48a8 8 0 1116 0 8 8 0 11-16 0z" />
    <path fill="#00C344" d="M112 48a8 8 0 0116 0 8 8 0 01-16 0z" />
    <path
      fill={
        theme.plain.color ||
        theme.styles.find(style => style.types.includes("punctuation")).style
          .color
      }
      d="M72 256a8.001 8.001 0 01-8-8V120a8 8 0 1116 0v128a8 8 0 01-8 8zM128 152a8 8 0 01-4.432-1.344l-24-16a8.003 8.003 0 01-2.615-10.431 8.003 8.003 0 012.615-2.881l24-16a7.997 7.997 0 0111.096 2.216 7.997 7.997 0 01-2.216 11.096L118.4 128l14.016 9.344a7.996 7.996 0 013.222 8.964A8 8 0 01128 152zM192 152a8.001 8.001 0 01-4.448-14.656L201.6 128l-14.016-9.344a8.004 8.004 0 01-2.216-11.096 8.004 8.004 0 0111.096-2.216l24 16a7.996 7.996 0 013.562 6.656 7.997 7.997 0 01-3.562 6.656l-24 16A8.005 8.005 0 01192 152zM152 160a8.01 8.01 0 01-6.491-3.321 7.999 7.999 0 01-1.101-7.207l16-48a8.007 8.007 0 0110.128-5.072 8.01 8.01 0 015.072 10.128l-16 48A8.002 8.002 0 01152 160zM96 176h48v16H96v-16zM160 176h16v16h-16v-16zM120 200h96v16h-96v-16zM264 200h56v16h-56v-16zM120 224h16v16h-16v-16zM152 224h96v16h-96v-16zM264 224h32v16h-32v-16zM232 200h16v16h-16v-16zM104 248h32v16h-32v-16zM152 248h16v16h-16v-16zM184 248h72v16h-72v-16zM120 272h88v16h-88v-16zM224 272h16v16h-16v-16zM320 227h88v16h-88v-16zM336 200h72v16h-72v-16z"
    />
    <path fill="#004FAC" d="M28 371h64v48H28v-48z" />
    <path fill="#00479B" d="M92 419H28v32a16.002 16.002 0 0016 16h48v-48z" />
    <path fill="#006DF0" d="M28 323h64v48H28v-48z" />
    <path fill="#9BC9FF" d="M28 275h64v48H28v-48z" />
    <path fill="#FF8C9E" d="M188 419h48v64h-48v-64z" />
    <path
      fill="#C8EC74"
      d="M127.832 337.847l33.936-33.936 45.248 45.248-33.936 33.936-45.248-45.248z"
    />
    <path
      fill="#5EAC24"
      d="M139.192 417.056l-45.248-45.248-1.928 1.92L60 405.744 105.256 451l33.936-33.944z"
    />
    <path
      fill="#9BDF69"
      d="M93.888 371.78l33.936-33.936 45.248 45.248-33.936 33.936-45.248-45.248z"
    />
    <path
      fill="#4E901E"
      d="M37.376 428.376a32 32 0 0045.248 45.248L105.256 451 60 405.744l-22.624 22.632z"
    />
    <path
      fill="#D80027"
      d="M60 419a31.997 31.997 0 00-32 32 31.998 31.998 0 0032 32h32v-64H60z"
    />
    <path fill="#FF3051" d="M140 483v-64H92v64h48z" />
    <path fill="#FF5E78" d="M140 419h48v64h-48v-64z" />
    <path fill="#333" d="M52 443h16v16H52v-16z" />
  </svg>
);

export default Icon;
