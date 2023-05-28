import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input, Space, Tag, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

type TagsProps = {
  value?: string[];
  isEdit?: boolean;
  style?: React.CSSProperties;
  onChange?: (tags: string[]) => void;
};

const tagInputStyle = {
  width: 78,
  verticalAlign: "top",
};

const tagPlusStyle = {
  borderStyle: "dashed",
};

function Tags({ value, isEdit, style, onChange }: TagsProps) {
  const [tags, setTags] = useState<string[]>([]);

  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (value) {
      setTags(value);
    }
  }, [value]);

  useEffect(() => {
    if (inputVisible) {
      // @ts-ignore
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    // @ts-ignore
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
    onChange && onChange(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
      onChange && onChange([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  return (
    <Space size={8} style={style}>
      <Space size={[0, 8]} wrap>
        {tags.map((tag) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={isEdit} style={{ userSelect: "none" }} onClose={() => handleClose(tag)}>
              <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
      </Space>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <>
          {isEdit && (
            <Tag style={tagPlusStyle} onClick={showInput}>
              <PlusOutlined /> Добавить тeг
            </Tag>
          )}
        </>
      )}
    </Space>
  );
}

export default Tags;
