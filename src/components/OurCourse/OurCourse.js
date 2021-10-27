import './styleOurCourse.css';
import OurCourseBanner from '../../public/images/OurCourse.png';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/SearchSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CourseCard from '../CourseCard/CourseCard';
import Pagination from '@mui/material/Pagination';

import { InputBaseConfig, IconButtonConfig, ButtonConfig } from './muiConfig';
import { useEffect, useState } from 'react';
import axios from '../../config/axios';
function OurCourse() {
  const [orderBy, setOrderBy] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState([]);
  const handleSummitSearch = e => {};
  useEffect(() => {
    const fetchDataAllCourse = async () => {
      try {
        const res = await axios.get('/course/byrating');
        // console.log(res);
        setCourses(res.data.courseResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataAllCourse();
  }, []);
  // console.log('courses: ', courses);
  return (
    <>
      <div className='divMainControllerOurCourse'>
        <div className='ourCourseBanner'>
          <img src={OurCourseBanner} alt='' />
          <h1 className='h1OurCourse'>Our Course</h1>
        </div>
        <div className='OurCourseSearch'>
          <div className='buttonSelectCourse'>
            <Button sx={ButtonConfig} variant='contained'>
              Front - End
            </Button>
            <Button sx={ButtonConfig} variant='contained'>
              Back - End
            </Button>
            <Button sx={ButtonConfig} variant='contained'>
              UX / UI Design
            </Button>
          </div>
          <div className='searchBar'>
            <div className='searchByInputText'>
              <form action='' onSubmit={handleSummitSearch}>
                <div className='inputSearchTextCourse'>
                  <p>Search</p>
                  <InputBase
                    sx={InputBaseConfig}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                  <IconButton
                    type='submit'
                    sx={IconButtonConfig}
                    aria-label='search'>
                    <SearchIcon />
                  </IconButton>
                </div>
              </form>
            </div>
            <div className='searchBySelect'>
              <div className='OrderByP'>
                <p>Order By</p>
              </div>
              <FormControl size='small' fullWidth>
                <InputLabel size='small' id='demo-simple-select-label'>
                  Part
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={orderBy}
                  label='Part'
                  size='small'
                  sx={{ backgroundColor: '#f5f5f5' }}
                  onChange={e => setOrderBy(e.target.value)}>
                  <MenuItem size='small' value={'html'}>
                    HTML
                  </MenuItem>
                  <MenuItem size='small' value={'Css'}>
                    Css
                  </MenuItem>
                  <MenuItem size='small' value={'javaScript'}>
                    JavaScript
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='outputSearchField'>
            {courses.map(item => (
              <CourseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className='divPaginationSearch'>
          <Pagination
            count={10}
            color='primary'
            value={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
}

export default OurCourse;
