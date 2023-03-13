package com.example.demo.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "AVILABLEROLES")
public class Roles {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private Role_Type name;

    public Roles() {

    }

    public Roles(Role_Type name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Role_Type getName() {
        return name;
    }

    public void setName(Role_Type name) {
        this.name = name;
    }

}
