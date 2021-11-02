import { Avatar, TextField } from '@mui/material';
import ShoppingCardBanner from '../../../public/images/shoppingCard.png';
import { imageConfig, buttonConfig3 } from '../muiConfig';
import Instructor from '../../../public/images/Instructor.png';
import { useContext, useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
// import { CategoryContext } from '../../../contexts/categoryContext';
import axios from '../../../config/axios';
function DummyHeaderInst({ item }) {
  // console.log('log', item.instructor.id);
  // const category = useContext(CategoryContext);
  // const categories = category?.map(item => item.categoryName);
  // console.log('categories: ', categories);
  // console.log('category: ', category);
  // console.log('item: ', item);

  // console.log('categories: ', categories);
  const [personName, setPersonName] = useState([]);
  const [category, setCategory] = useState([]);
  const [instCategory, setInstCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [toggle, setToggle] = useState(false);
  // console.log('category: ', category);
  // console.log('personName: ', personName);
  // console.log('instCategory: ', instCategory);
  console.log('checked: ', checked);
  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await axios.get('/category');
        setCategory(response.data.category.map(item => item.categoryName));
        // console.log(
        //   'response: ',
        //   item.InstructorCats.map(item => item.Category.categoryName)
        // );
        setInstCategory(
          item.InstructorCats.map(item => item.Category.categoryName)
        );
        const cat = response.data.category.map(item => item.categoryName);
        const inst = item.InstructorCats.map(
          item => item.Category.categoryName
        );
        // console.log('cat: ', typeof cat);
        // console.log('cat: ', cat);
        // console.log('inst: ', inst);
        // for (let i = 0; i < cat.length; i++) {
        //   if (cat[i].includes(inst)) {
        //     setChecked[i](true);
        //   } else {
        //     setChecked[i](false);
        //   }
        // }
        setChecked(
          cat.map(item => {
            if (inst.includes(item)) {
              return true;
            } else {
              return false;
            }
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataCategory();
  }, [item]);
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <div
      className='divMainHeaderInstructorCard'
      style={{
        backgroundImage: `url(${ShoppingCardBanner})`,
      }}>
      <div className='textOnInstructorCardBannerControl'>
        <div className='textFieldInstructorEditHeader'>
          <TextField
            sx={buttonConfig3}
            id='outlined-basic'
            label='Enter Instructor Name'
            variant='outlined'
            value={item.fullName || ''}
          />
        </div>
        <div className='textFieldInstructorEditHeader'>
          <TextField
            sx={buttonConfig3}
            id='outlined-basic'
            label='Job Title'
            variant='outlined'
          />
        </div>
        <div className='textFieldInstructorEditHeader'>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
            <Select
              labelId='demo-multiple-checkbox-label'
              id='demo-multiple-checkbox'
              multiple
              sx={buttonConfig3}
              value={personName}
              onChange={handleChange}
              onClick={() => setToggle(!toggle)}
              input={<OutlinedInput label='Tag' />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}>
              {category.map((item, index) => (
                <MenuItem key={item.id} value={item}>
                  <Checkbox
                    checked={checked[index]}
                    onChange={e =>
                      setChecked(curr =>
                        curr.map((item, idx) =>
                          idx === index ? e.target.checked : item
                        )
                      )
                    }
                    // checked={instCategory.includes(item)}
                    // defaultChecked={true}
                  />

                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='textFieldInstructorEditHeader'>
          <TextField
            id='outlined-multiline-static'
            sx={buttonConfig3}
            label='Bio ( Max. 250 Character)'
            multiline
            rows={6}
          />
        </div>
      </div>
      <div className='InstructorCardImage'>
        <Avatar
          alt='Remy Sharp'
          // src={item.instructor.profileImage}
          sx={imageConfig}
        />
      </div>
    </div>
  );
}

export default DummyHeaderInst;
