package com.registrationprocess.service;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.registrationprocess.hibernateutil.HibernateUtil;
import com.registrationprocess.model.Student;
public class RegisterService {
    
public boolean register(Student student){
     Session session = HibernateUtil.openSession();
     if(isUserExists(student)) return false;  
     
     Transaction tx = null;
     try {
         tx = session.getTransaction();
         tx.begin();
         session.saveOrUpdate(student);       
         tx.commit();
     } catch (Exception e) {
         if (tx != null) {
             tx.rollback();
         }
         e.printStackTrace();
     } finally {
         session.close();
     } 
     return true;
}
 
public boolean isUserExists(Student student){
     Session session = HibernateUtil.openSession();
     boolean result = false;
     Transaction tx = null;
     try{
         tx = session.getTransaction();
         tx.begin();
         Query query = session.createQuery("from Student where userId='"+student.getUserId()+"'");
         Student u = (Student)query.uniqueResult();
         tx.commit();
         if(u!=null) result = true;
     }catch(Exception ex){
         if(tx!=null){
             tx.rollback();
         }
     }finally{
         session.close();
     }
     return result;
}
}
