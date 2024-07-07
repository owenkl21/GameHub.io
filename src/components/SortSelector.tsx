import { Menu, MenuButton, MenuItem, MenuList, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const [orderName, setOrderName] = useState('Relevance');
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {orderName}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(order.value);
              setOrderName(order.label);
            }}
            value={order.value}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
