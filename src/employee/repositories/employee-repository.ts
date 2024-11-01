import { Employee } from "@prisma/client";

export interface EmployeeRepository{
  findEmployeeById(id: string): Promise<Employee | null>
  findEmployeeById(id: string): Promise<Employee | null>
}