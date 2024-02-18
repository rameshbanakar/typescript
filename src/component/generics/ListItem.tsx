import React from 'react'
type ListItemProps <T>= {
    items: T[],
    onClick: (value: T) => void
}
export default function ListItem <T extends { id: number | string, name: string }>({ items, onClick }: ListItemProps<T>) {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id} onClick={() => onClick(item)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}
