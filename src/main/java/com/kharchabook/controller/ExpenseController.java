package com.kharchabook.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kharchabook.entity.Expense;
import com.kharchabook.service.ExpenseService;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }


    // CREATE
    @PostMapping
    public Expense createExpense(
            @RequestBody Expense expense) {

        return expenseService.saveExpense(expense);
    }


    // READ ALL
    @GetMapping
    public List<Expense> getAllExpenses() {

        return expenseService.getAllExpenses();
    }


    // READ BY ID
    @GetMapping("/{id}")
    public Expense getExpenseById(
            @PathVariable Long id) {

        return expenseService.getExpenseById(id);
    }


    // UPDATE
    @PutMapping("/{id}")
    public Expense updateExpense(
            @PathVariable Long id,
            @RequestBody Expense expense) {

        return expenseService.updateExpense(
                id,
                expense
        );
    }


    // DELETE
    @DeleteMapping("/{id}")
    public String deleteExpense(
            @PathVariable Long id) {

        expenseService.deleteExpense(id);

        return "Expense deleted successfully";
    }
}