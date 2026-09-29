package com.kharchabook.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kharchabook.entity.Expense;
import com.kharchabook.repository.ExpenseRepository;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    // CREATE
    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    // READ ALL
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    // READ BY ID
    public Expense getExpenseById(Long id) {

        return expenseRepository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Expense not found with id: " + id)
                );
    }

    // UPDATE
    public Expense updateExpense(Long id, Expense updatedExpense) {

        Expense existingExpense = getExpenseById(id);

        existingExpense.setTitle(updatedExpense.getTitle());
        existingExpense.setAmount(updatedExpense.getAmount());
        existingExpense.setCategory(updatedExpense.getCategory());
        existingExpense.setDescription(updatedExpense.getDescription());
        existingExpense.setExpenseDate(updatedExpense.getExpenseDate());

        return expenseRepository.save(existingExpense);
    }

    // DELETE
    public void deleteExpense(Long id) {

        Expense existingExpense = getExpenseById(id);

        expenseRepository.delete(existingExpense);
    }
}