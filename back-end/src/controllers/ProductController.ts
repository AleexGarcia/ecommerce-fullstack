import { Request, Response } from "express";
import ProductService from "../services/ProductService";
import { Category } from "../enum/EnumCategory";

export default class ProductController {
  productService: ProductService;
  constructor(productService: ProductService = new ProductService()) {
    this.productService = productService;
  }
  createProduct = async (request: Request, response: Response) => {

    const objectData = request.body;
    const product = await this.productService.createProduct(
      objectData
    );
    if (product) return response.status(201).json(product);
    return response.status(401).json({ message: "Error" });
  };

  getInitialProducts = async (request: Request, response: Response) => {
    const products = await this.productService.getInitialProducts();
    if (!products) return response.status(400).json({ message: "Not found" });
    return response.status(200).json(products);
  };

  getProductsByCategory = async (request: Request, response: Response) => {
    const category = request.params.category;
    const products = await this.productService.getProductsByCategory(category as Category);

    if (!products) return response.status(400).json({ message: "not found" });

    return response.status(200).json(products);
  };

  getProductsByPartialName = async (request: Request, response: Response) => {};

  getProductById = async (request: Request, response: Response) => {
    const id = request.params.id;
    console.log(id);
    const product = await this.productService.getProductById(id);
    if (product) return response.status(200).json(product);
    return response.status(400).json({ message: "not found" });
  };

  updateProduct = async (request: Request, response: Response) => {
    const id = request.params.id;
    const receiveProduct = request.body;
    const product = await this.productService.updateProduct(id, receiveProduct);
  };
  deleteProduct = async (request: Request, response: Response) => {};
}
