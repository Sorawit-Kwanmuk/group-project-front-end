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
  const [category2, setCategory2] = useState([]);
  const [instCategory, setInstCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [checked2, setChecked2] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [currentCat, setCurrentCat] = useState([]);
  const [test, setTest] = useState([]);
  // console.log('category: ', category);
  // console.log('personName: ', personName);
  console.log('instCategory: ', instCategory);
  console.log('currentCat', currentCat);
  console.log('checked: ', checked);
  console.log('checked2: ', checked2);
  console.log('category2', category2);
  useEffect(() => {
    const fetchDataCategory = async () => {
      try {
        const response = await axios.get('/category');
        setCategory(response.data.category.map(item => item.categoryName));
        setCategory2(response.data.category.map(item => item.categoryName));
        // setChecked2(response.data.category.map(item => item.categoryName));
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
        // setTest(item.InstructorCats.map(item => item.Category.categoryName));
        setTest(names2);
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
        // console.log('inst: ', inst);
        setChecked(
          cat.map(item => {
            if (inst.includes(item)) {
              return true;
            } else {
              return false;
            }
          })
        );
        setChecked2(
          checked.filter(item => {
            if (inst.includes(item)) {
              return inst[inst.indexOf(item)];
            }
          })
        );

        setCurrentCat();
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
  const names = ['front_end', 'back_end', 'ux_ui'];
  const names2 = ['front_end', 'back_end'];
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
          {/* {checked.length > 0 && (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
              <Select
                labelId='demo-multiple-checkbox-label'
                id='demo-multiple-checkbox'
                multiple
                sx={buttonConfig3}
                value={category}
                // name={checked}
                onChange={handleChange}
                onClick={() => setToggle(!toggle)}
                input={<OutlinedInput label='Tag' />}
                renderValue={selected => selected.join(', ')}
                MenuProps={MenuProps}>
                {category.map((item, index) => (
                  <MenuItem key={item.id} name={checked[index]} value={item}>
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
          )} */}

          <FormControl sx={{ width: '100%' }}>
            <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
            <Select
              labelId='demo-multiple-checkbox-label'
              id='demo-multiple-checkbox'
              multiple
              sx={buttonConfig3}
              value={test}
              // name={checked}
              onChange={handleChange}
              onClick={() => setToggle(!toggle)}
              input={<OutlinedInput label='Tag' />}
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}>
              {names.map(item => (
                <MenuItem key={item} value={item}>
                  <Checkbox checked={test.indexOf(item) > -1} />
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
