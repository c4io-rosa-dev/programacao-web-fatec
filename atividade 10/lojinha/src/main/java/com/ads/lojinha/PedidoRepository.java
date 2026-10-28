package com.ads.lojinha;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository  extends JpaRepository<Pedido, Integer> {

    @Query(value = "select * from pedido where codigo_cliente = ?1 order by data desc", nativeQuery = true)
    List<Pedido> listarPorCliente(int codigoCliente);
}
