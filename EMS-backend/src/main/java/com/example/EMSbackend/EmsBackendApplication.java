package com.example.EMSbackend;

import com.example.EMSbackend.model.Employee;
import com.example.EMSbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmsBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirst_name("Jakob");
//		employee.setLast_name("Reyes");
//		employee.setEmail("Jakob@gmail.com");
//		employee.setDepartment("Engineer");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//		employee1.setFirst_name("John");
//		employee1.setLast_name("Doe");
//		employee1.setEmail("JDoe@gmail.com");
//		employee1.setDepartment("Engineer");
//		employeeRepository.save(employee1);
	}
}
