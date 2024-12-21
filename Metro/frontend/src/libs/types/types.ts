export interface MenuItemType {
    title: string,
    options: MenuOptions[]
}

interface MenuOptions {
    title: string,
    onClick: () => void
}