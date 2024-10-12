import React, { useState } from "react";
import { ConfirmPassword, Email, Parson, Password } from "../../../lib/icon";
import { Button } from "../button";
import { Input } from "../input";

// Mock function to simulate saving data to a database
const saveRegistrationData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data saved successfully", data);
    }, 1000); // Simulating async database call
  });
};

export const Step2 = ({ nextStep, changeData, data }) => {
  const [agree, setAgree] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !data.email ||
      !data.firstName ||
      !data.lastName ||
      !data.password ||
      !data.confirmPassword
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // All checks passed, save data (e.g., send to backend/database)
    try {
      // Simulate API call or database save
      await saveRegistrationData(data);

      // Proceed to the next step after successful registration
      console.log("User registered successfully", data);
      nextStep(3);
    } catch (error) {
      setError("An error occurred while registering. Please try again.");
      console.error("Registration Error:", error);
    }
  };

  return (
    <form>
      <div className="space-y-2" onSubmit={handleRegister}>
        <Input
          disabled
          icon={<Email />}
          name="email"
          type="email"
          label="Email"
          value={data.email}
          isNotValid={false}
          changeData={changeData}
        />
        <div className="flex justify-between items-center gap-2">
          <Input
            icon={<Parson />}
            name="firstName"
            type="test"
            label="First name"
            placeholder="First name"
            value={data.firstName}
            isNotValid={false}
            changeData={changeData}
          />
          <Input
            icon={<Parson />}
            name="lastName"
            type="text"
            label="Last name"
            placeholder="Last name"
            value={data.lastName}
            isNotValid={false}
            changeData={changeData}
          />
        </div>
        <Input
          icon={<Password />}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          value={data.password}
          isNotValid={false}
          changeData={changeData}
        />
        <Input
          icon={<ConfirmPassword />}
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm password"
          value={data.confirmPassword}
          isNotValid={false}
          changeData={changeData}
        />
      </div>

      <div className="space-x-2.5 pt-[15px]">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => setAgree(e.target.checked)}
        />
        <span className="font-bold text-sm text-foreground">
          I agree with terms & conditions
        </span>
      </div>

      <Button type="submit" disabled={!agree} onClick={handleRegister}>
        Continue
      </Button>
    </form>
  );
};
