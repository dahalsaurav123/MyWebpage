package com.registrationprocess.service;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.registrationprocess.hibernateutil.HibernateUtil;
import com.registrationprocess.model.Student;

public class LoginService {

	public boolean authenticateUser(String userId, String password) {
		Student student = getStudentByUserId(userId);
		if (student != null && student.getUserId().equals(userId)
				&& student.getPassword().equals(password)) {
			return true;
		} else {
			return false;
		}
	}

	public Student getStudentByUserId(String userId) {
		Session session = HibernateUtil.openSession();
		Transaction tx = null;
		Student user = null;
		try {
			tx = session.getTransaction();
			tx.begin();
			Query query = session.createQuery("from Student where userId='"
					+ userId + "'");
			user = (Student) query.uniqueResult();
			tx.commit();
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			session.close();
		}
		return user;
	}

	public List<Student> getListOfStudents() {
		List<Student> list = new ArrayList<Student>();
		Session session = HibernateUtil.openSession();
		Transaction tx = null;
		try {
			tx = session.getTransaction();
			tx.begin();
			list = session.createQuery("from Student").list();
			tx.commit();
		} catch (Exception e) {
			if (tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		} finally {
			session.close();
		}
		return list;
	}
}