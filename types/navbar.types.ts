export interface DropdownLink {
  label: string;
  href: string;
}

export interface LinkItem {
  label: string;
  href: string;
  submenu?: DropdownLink[];
}
