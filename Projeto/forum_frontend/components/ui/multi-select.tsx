"use client"

import { X } from "lucide-react"
import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Command, CommandGroup, CommandItem } from "@/components/ui/command"
import { Command as CommandPrimitive } from "cmdk"
import { Tag } from "types/Tag/Tag"

interface FancyMultiSelectProps {
  tags: Tag[]
  selected: Tag[]
  setSelected: React.Dispatch<React.SetStateAction<Tag[]>>
}

export function FancyMultiSelect({
  tags,
  selected,
  setSelected
}: FancyMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [open, setOpen] = React.useState(false)
  // const [selected, setSelected] = React.useState<Tag[]>([])
  const [inputValue, setInputValue] = React.useState("")

  const handleUnselect = React.useCallback(
    (tag: Tag) => {
      setSelected(prev => prev.filter(s => s.id !== tag.id))
    },
    [setSelected]
  )

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected(prev => {
              const newSelected = [...prev]
              newSelected.pop()
              return newSelected
            })
          }
        }
        if (e.key === "Escape") {
          input.blur()
        }
      }
    },
    [setSelected]
  )

  const selectables = tags.filter(tag => !selected.includes(tag))

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group border border-input px-3 py-2 text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex gap-1 flex-wrap">
          {selected.map(tag => {
            return (
              <Badge key={tag.id} variant="secondary">
                {tag.name}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={e => {
                    if (e.key === "Enter") {
                      handleUnselect(tag)
                    }
                  }}
                  onMouseDown={e => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(tag)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            )
          })}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Selecione as Tags desejadas..."
            className="ml-2 bg-transparent outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-slate-50 text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map(tag => {
                return (
                  <CommandItem
                    key={tag.id}
                    onMouseDown={e => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onSelect={value => {
                      setInputValue("")
                      setSelected(prev => [...prev, tag])
                    }}
                    className={"cursor-pointer"}
                  >
                    {tag.name}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  )
}
