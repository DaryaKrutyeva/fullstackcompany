import { useEffect, useState } from "react";
import styled from "styled-components";
import { loggedInAtom } from "../../_state/users";
import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom, selectedCompanyAtom } from "../../_state/users";

const CompanySelection = styled.div`
  background: #051622;
  text-align: center;
  > h1 {
    color: #1ba098;
    font-size: 2.5em;
  }
`;

const CompanySelect = styled.select`
  background-color: white;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  color: #005594;
  border: none;
  font-size: 1.5em;
  padding: 0.3em 2.5em 0.3em 1.02em;
  background-position-x: 200px;
  border-radius: 10px;
  -webkit-appearance: none;
  transition: 250ms;
  margin-bottom: 20px;

  &::selection {
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_up.png)
      no-repeat right #fff;
    background-position-x: 200px;
    transition: 250ms;
  }
`;

const SelectCompany = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const [selectedCompany, setSelectedCompany] = useRecoilState(selectedCompanyAtom)
  const [selected, setSelected] = useState(false)
  const [companies, setCompanies] = useState([
    {
      company: "Cook Systems",
    },
    { company: "FedEx" },
    { company: "Google" },
  ]);

  useEffect(() => {
    //call api helper to get companies
  }, []);

  const redirect = (event) => {
    setSelectedCompany(event.target.value)
    setSelected(true)
  };

  const [isLoggedIn] = useRecoilState(loggedInAtom);
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (isLoggedIn && !user.admin) {
    return <Redirect to="/announcements" />;
  }
  if (selected) {
    return <Redirect to="/announcements" />;
  }
  return (
    <CompanySelection>
      <h1>Select Company</h1>
      <CompanySelect onChange={redirect} value="none">
        <option value="none" disabled>
          Pick an option
        </option>
        {companies.map((company, index) => (
          <option key={index} value={company.company}>
            {company.company}
          </option>
        ))}
      </CompanySelect>
    </CompanySelection>
  );
};

export default SelectCompany;
