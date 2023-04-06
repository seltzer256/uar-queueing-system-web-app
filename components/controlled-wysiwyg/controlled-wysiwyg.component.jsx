import React from "react";
import * as S from "./controlled-wysiwyg.styles";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { Controller, useFormContext } from "react-hook-form";
import { NOT_ALLOWED_HTML_ATTRS } from "../../lib/constants";
import RhfErrorHandler from "../rhf-error-handler/rhf-error-handler.component";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const ControlledWysiwyg = ({ name, rules }) => {
  const { control } = useFormContext();

  if (!control) return null;

  const handleChange = (val, controlledChange) => {
    // console.log("val :>> ", val);
    let cleanContent = val;
    NOT_ALLOWED_HTML_ATTRS.map((el) => {
      cleanContent = cleanContent.replace(el, "");
    });
    controlledChange && controlledChange(cleanContent);
  };

  return (
    <RhfErrorHandler name={name} rules={rules}>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { onChange, name, value } }) => (
          <S.Wrapper>
            <SunEditor
              onChange={(val) => handleChange(val, onChange)}
              name={name}
              setContents={value}
              setOptions={{
                buttonList: [
                  ["undo", "redo"],
                  [
                    // 'font',
                    "fontSize",
                    "formatBlock",
                  ],
                  [
                    "bold",
                    "underline",
                    "italic",
                    "strike",
                    //   "subscript",
                    //   "superscript",
                  ],
                  // ["fontColor", "hiliteColor", "textStyle"],
                  ["removeFormat"],
                  // ["outdent", "indent"],
                  [
                    "align",
                    // "horizontalRule",
                    "list",
                    //   "lineHeight",
                  ],
                  ["table", "link", "image"],
                  // ["imageGallery"],
                  ["fullScreen", "showBlocks", "codeView"],
                  // ["preview", "print"],
                  // ["save", "template"],
                ],
              }}
            />
          </S.Wrapper>
        )}
      />
    </RhfErrorHandler>
  );
};

export default ControlledWysiwyg;
