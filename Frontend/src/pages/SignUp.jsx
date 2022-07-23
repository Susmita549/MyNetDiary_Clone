import React, { useState } from 'react';
import {
  BsFillExclamationSquareFill,
  BsFillEnvelopeFill,
} from 'react-icons/bs';


import {
  Box,
  Flex,
  InputGroup,
  InputRightElement,
  Input,
  Stack,
  Radio,
  Button,
  RadioGroup,
} from '@chakra-ui/react';
import './signup.css';

const SignUp = () => {
  const [selectedStage, setSelectedStage] = useState(1);
  const [one, setOne] = useState({});
  const [two, setTwo] = useState({});
  const [three, setThree] = useState({});
  const [form, setForm] = useState({});
  const handleStage3 = () => {
    setForm({
      ...one,
      ...two,
      ...three,
    });
    // console.log(form);
    if (form !== {}) {
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then(res => res.json())
        .then(d => console.log(d));
    }
  };

  return (
    <>
      <Box className="main">
        <Box className="first">
          <Box className="layer">
            <Box className="first_layer"></Box>
          </Box>
        </Box>

        {selectedStage === 1 ? (
          <StageOne
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            setOne={setOne}
            one={one}
          />
        ) : selectedStage === 2 ? (
          <StageTwo
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            setTwo={setTwo}
            two={two}
          />
        ) : (
          <StageThree
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            setThree={setThree}
            three={three}
            handleStage3={handleStage3}
          />
        )}
      </Box>
      <Flex
        style={{
          zIndex: '10',
          position: 'absolute',
          bottom: '-300px',
          left: '28%',
        }}
      >
        By signing up, you are agreeing to the{' '}
        <span style={{ color: '#3c9ec3' }}>Terms of Service</span>
      </Flex>
    </>
  );
};

export default SignUp;

const StageOne = ({ selectedStage, setSelectedStage, one, setOne }) => {
  const handleChange = e => {
    if (e.target.name === 'radio') {
      setOne({
        ...one,
        progress: e.target.value,
      });
    } else {
      setOne({
        ...one,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleStage1 = () => {
    setSelectedStage(selectedStage + 1);
  };
  return (
    <Box className="form_field">
      <Box className="form_header">Tell Us About Yourself</Box>
      <InputGroup w="50%" m="auto" marginTop="2rem">
        <InputRightElement pointerEvents="none" children={'lb'} />
        <Input
          name="curWeight"
          placeholder="How much do you weigh?"
          border="none"
          borderRadius="none"
          borderBottom="1px solid black"
          marginBottom="2rem"
          onChange={e => handleChange(e)}
        />
      </InputGroup>
      <InputGroup w="50%" m="auto" marginTop="2rem">
        <InputRightElement pointerEvents="none" children={'lb'} />
        <Input
          name="targetWeight"
          placeholder="What is your target weight?

      "
          border="none"
          borderRadius="none"
          borderBottom="1px solid black"
          marginBottom="2rem"
          onChange={e => handleChange(e)}
        />
      </InputGroup>
      <Box
        style={{
          fontWeight: '500',
          color: '#3c9ec3',
          textDecoration: 'underline',
        }}
      >
        Convert to Metric unit (kg,cm)
      </Box>
      <Box>
        <Box marginLeft="12rem">
          <label style={{ marginLeft: '-35rem', marginBottom: '2rem' }}>
            Your desire progress
          </label>
          <RadioGroup marginTop="2rem">
            <Stack spacing={5} direction="column">
              <Radio
                colorScheme="green"
                value="1"
                name="radio"
                borderColor="black"
                onChange={e => handleChange(e)}
              >
                Lose 1 lb/week
              </Radio>
              <Radio
                colorScheme="green"
                value="1.5"
                name="radio"
                borderColor="black"
                onChange={e => handleChange(e)}
              >
                Lose 1½ lb/week
              </Radio>
              <Radio
                colorScheme="green"
                value="2"
                name="radio"
                borderColor="black"
                onChange={e => handleChange(e)}
              >
                Lose 2 lbs/week
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>

      <Button colorScheme="blue" marginTop="2rem" onClick={handleStage1}>
        NEXT
      </Button>
    </Box>
  );
};

const StageTwo = ({ selectedStage, setSelectedStage, two, setTwo }) => {
  let [dates, setDate] = useState({});
  const ondateChange = e => {
    if (e.target.name === 'radio') {
      setDate({
        ...dates,
        gender: e.target.value,
      });
    } else {
      setDate({
        ...dates,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleStage2 = () => {
    let date = `${dates.day}/${dates.month}/${dates.year}`;
    let height = dates.height;
    let gender = dates.gender;

    setTwo({
      ...two,
      date,
      height,
      gender,
    });
    setSelectedStage(selectedStage + 1);
  };
  const handlePev = () => {
    setSelectedStage(selectedStage - 1);
    console.log('prev ', selectedStage);
  };

  return (
    <Box className="form_field">
      <Box className="form_header">Tell Us About Yourself</Box>

      <Box style={{ fontWeight: '500', color: '#3c9ec3' }}>
        To calculate your calorie and nutrient needs
      </Box>
      <Box>
        <Box marginLeft="12rem">
          <Box textAlign="left" marginBottom="1.5rem">
            You are:
          </Box>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="column">
              <Radio
                colorScheme="green"
                value="male"
                borderColor="black"
                name="radio"
                onChange={e => ondateChange(e)}
              >
                Male
              </Radio>
              <Radio
                colorScheme="green"
                value="female"
                borderColor="black"
                name="radio"
                onChange={e => ondateChange(e)}
              >
                Female
              </Radio>
            </Stack>
          </RadioGroup>
          <Box textAlign="left" margin="1.5rem 0rem 1.5rem 0rem">
            when ware you born:
          </Box>
          <Flex
            justifyContent="space-between"
            textAlign="left"
            paddingRight="10rem "
            marginBottom="2rem"
          >
            <Box>
              <label style={{ color: 'gray' }}>Day</label>
              <Box>
                <select
                  name="day"
                  className="day"
                  style={{ borderBottom: '2px solid black' }}
                  onChange={e => ondateChange(e)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </Box>
            </Box>
            <Box>
              <label style={{ color: 'gray' }}>Month</label>
              <Box>
                <select
                  className="month"
                  name="month"
                  style={{ borderBottom: '2px solid black' }}
                  onChange={e => ondateChange(e)}
                >
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
              </Box>
            </Box>
            <Box>
              <label style={{ color: 'gray' }}>Year</label>
              <Box>
                <select
                  className="year"
                  name="year"
                  style={{ borderBottom: '2px solid black' }}
                  onChange={e => ondateChange(e)}
                >
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                  <option value="1963">1963</option>
                  <option value="1962">1962</option>
                  <option value="1961">1961</option>
                  <option value="1960">1960</option>
                  <option value="1959">1959</option>
                  <option value="1958">1958</option>
                  <option value="1957">1957</option>
                  <option value="1956">1956</option>
                  <option value="1955">1955</option>
                  <option value="1954">1954</option>
                  <option value="1953">1953</option>
                  <option value="1952">1952</option>
                  <option value="1951">1951</option>
                  <option value="1950">1950</option>
                  <option value="1949">1949</option>
                  <option value="1948">1948</option>
                  <option value="1947">1947</option>
                  <option value="1946">1946</option>
                  <option value="1945">1945</option>
                  <option value="1944">1944</option>
                  <option value="1943">1943</option>
                  <option value="1942">1942</option>
                  <option value="1941">1941</option>
                  <option value="1940">1940</option>
                  <option value="1939">1939</option>
                  <option value="1938">1938</option>
                  <option value="1937">1937</option>
                  <option value="1936">1936</option>
                  <option value="1935">1935</option>
                  <option value="1934">1934</option>
                  <option value="1933">1933</option>
                  <option value="1932">1932</option>
                  <option value="1931">1931</option>
                  <option value="1930">1930</option>
                  <option value="1929">1929</option>
                  <option value="1928">1928</option>
                  <option value="1927">1927</option>
                  <option value="1926">1926</option>
                  <option value="1925">1925</option>
                  <option value="1924">1924</option>
                  <option value="1923">1923</option>
                  <option value="1922">1922</option>
                  <option value="1921">1921</option>
                  <option value="1920">1920</option>
                  <option value="1919">1919</option>
                  <option value="1918">1918</option>
                  <option value="1917">1917</option>
                  <option value="1916">1916</option>
                  <option value="1915">1915</option>
                  <option value="1914">1914</option>
                  <option value="1913">1913</option>
                  <option value="1912">1912</option>
                  <option value="1911">1911</option>
                  <option value="1910">1910</option>
                  <option value="1909">1909</option>
                  <option value="1908">1908</option>
                </select>
              </Box>
            </Box>
          </Flex>
          <Box textAlign="left">
            <label htmlFor="Box" style={{ color: 'gray' }}>
              How tall you are?
            </label>
            <Box>
              <select
                className="height"
                name="height"
                style={{ borderBottom: '2px solid black' }}
                onChange={e => ondateChange(e)}
              >
                <option value="36">3 ft 0 inch</option>
                <option value="37">3 ft 1 inch</option>
                <option value="38">3 ft 2 inch</option>
                <option value="39">3 ft 3 inch</option>
                <option value="40">3 ft 4 inch</option>
                <option value="41">3 ft 5 inch</option>
                <option value="42">3 ft 6 inch</option>
                <option value="43">3 ft 7 inch</option>
                <option value="44">3 ft 8 inch</option>
                <option value="45">3 ft 9 inch</option>
                <option value="46">3 ft 10 inch</option>
                <option value="47">3 ft 11 inch</option>
                <option value="48">4 ft 0 inch</option>
                <option value="49">4 ft 1 inch</option>
                <option value="50">4 ft 2 inch</option>
                <option value="51">4 ft 3 inch</option>
                <option value="52">4 ft 4 inch</option>
                <option value="53">4 ft 5 inch</option>
                <option value="54">4 ft 6 inch</option>
                <option value="55">4 ft 7 inch</option>
                <option value="56">4 ft 8 inch</option>
                <option value="57">4 ft 9 inch</option>
                <option value="58">4 ft 10 inch</option>
                <option value="59">4 ft 11 inch</option>
                <option value="60">5 ft 0 inch</option>
                <option value="61">5 ft 1 inch</option>
                <option value="62">5 ft 2 inch</option>
                <option value="63">5 ft 3 inch</option>
                <option value="64">5 ft 4 inch</option>
                <option value="65">5 ft 5 inch</option>
                <option value="66">5 ft 6 inch</option>
                <option value="67">5 ft 7 inch</option>
                <option value="68">5 ft 8 inch</option>
                <option value="69">5 ft 9 inch</option>
                <option value="70">5 ft 10 inch</option>
                <option value="71">5 ft 11 inch</option>
                <option value="72">6 ft 0 inch</option>
                <option value="73">6 ft 1 inch</option>
                <option value="74">6 ft 2 inch</option>
                <option value="75">6 ft 3 inch</option>
                <option value="76">6 ft 4 inch</option>
                <option value="77">6 ft 5 inch</option>
                <option value="78">6 ft 6 inch</option>
                <option value="79">6 ft 7 inch</option>
                <option value="80">6 ft 8 inch</option>
                <option value="81">6 ft 9 inch</option>
                <option value="82">6 ft 10 inch</option>
                <option value="83">6 ft 11 inch</option>
                <option value="84">7 ft 0 inch</option>
                <option value="85">7 ft 1 inch</option>
                <option value="86">7 ft 2 inch</option>
                <option value="87">7 ft 3 inch</option>
                <option value="88">7 ft 4 inch</option>
                <option value="89">7 ft 5 inch</option>
                <option value="90">7 ft 6 inch</option>
                <option value="91">7 ft 7 inch</option>
                <option value="92">7 ft 8 inch</option>
                <option value="93">7 ft 9 inch</option>
                <option value="94">7 ft 10 inch</option>
                <option value="95">7 ft 11 inch</option>
                <option value="96">8 ft 0 inch</option>
                <option value="97">8 ft 1 inch</option>
                <option value="98">8 ft 2 inch</option>
                <option value="99">8 ft 3 inch</option>
                <option value="100">8 ft 4 inch</option>
                <option value="101">8 ft 5 inch</option>
                <option value="102">8 ft 6 inch</option>
                <option value="103">8 ft 7 inch</option>
                <option value="104">8 ft 8 inch</option>
                <option value="105">8 ft 9 inch</option>
                <option value="106">8 ft 10 inch</option>
                <option value="107">8 ft 11 inch</option>
              </select>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginTop="4rem">
        <Button colorScheme="blue" marginRight="1rem" onClick={handlePev}>
          BACK
        </Button>
        <Button colorScheme="blue" onClick={handleStage2}>
          NEXT
        </Button>
      </Box>
    </Box>
  );
};
const StageThree = ({
  selectedStage,
  setSelectedStage,
  three,
  setThree,
  handleStage3,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleChange = e => {
    setThree({
      ...three,
      [e.target.name]: e.target.value,
    });
  };

  const handlePev = () => {
    setSelectedStage(selectedStage - 1);
  };
  return (
    <Box className="form_field">
      <Box className="form_header">Create Account</Box>

      <Box>
        <Box
          padding="2rem"
          justifyItems=""
          backgroundColor="rgb(242, 242, 242)"
          color="gray"
          margin="1rem"
        >
          <span style={{ fontWeight: '700', color: '#0d0d0d' }}>
            If you already use MyNetDiary app on your mobile phone:
          </span>{' '}
          to access your information on the website, you need to{' '}
          <span style={{ color: '#5cb8ea' }}>SignIn</span> (not Sign Up!) with
          the same email and password as you use in the mobile app. If you
          haven't created an account in the app, please create an account in the
          app first and{' '}
          <span style={{ fontWeight: '700', color: '#0d0d0d' }}>then</span> go
          to Sign In on the website.
        </Box>
      </Box>
      <Box w="40%" m="auto">
        <Stack spacing={4}>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={
                <BsFillExclamationSquareFill color="teal" fontSize="1.5rem" />
              }
            />
            <Input
              placeholder="Enter Name"
              border="none"
              borderRadius="none"
              borderBottom="2px solid black"
              border_focus="none"
              border_active="none"
              fontSize="1.5rem"
              marginBottom="2rem"
              name="name"
              onChange={e => handleChange(e)}
            />
          </InputGroup>
          <InputGroup>
            <InputRightElement
              pointerEvents="none"
              children={<BsFillEnvelopeFill color="teal" fontSize="1.5rem" />}
            />
            <Input
              placeholder="Enter Email"
              border="none"
              borderRadius="none"
              borderBottom="2px solid black"
              border_focus="none"
              border_active="none"
              marginBottom="2rem"
              fontSize="1.5rem"
              name="email"
              onChange={e => handleChange(e)}
            />
          </InputGroup>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              border="none"
              borderRadius="none"
              borderBottom="2px solid black"
              border_focus="none"
              fontSize="1.5rem"
              border_active="none"
              marginBottom="2rem"
              name="pass"
              onChange={e => handleChange(e)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </Box>
      <Box>
        <Button colorScheme="blue" marginRight="1rem" onClick={handlePev}>
          BACK
        </Button>
        <Button colorScheme="blue" onClick={handleStage3}>
          NEXT
        </Button>
      </Box>
    </Box>
  );
};
}
