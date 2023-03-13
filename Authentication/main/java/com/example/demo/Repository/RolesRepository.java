package com.example.demo.Repository;

import com.example.demo.entity.Roles;
import com.example.demo.entity.Role_Type;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolesRepository extends JpaRepository<Roles,Long> {
    Optional<Roles> findByName(Role_Type name);
}
