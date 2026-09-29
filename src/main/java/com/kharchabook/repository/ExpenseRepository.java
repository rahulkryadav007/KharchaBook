package com.kharchabook.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kharchabook.entity.Expense;

public interface ExpenseRepository
        extends JpaRepository<Expense, Long> {

}