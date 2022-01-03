import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { FirstComponent } from "./first.component";

describe("First Component", () => {
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;
  let mockRepo = {
    getProducts: function () {
      return [
        new Product(1, "test1", "Soccer", 100),
        new Product(2, "test2", "Chess", 100),
        new Product(3, "test3", "Soccer", 100),
      ]
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [{ provide: Model, useValue: mockRepo }]
    });
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
  });

  it("first component is defined", () => expect(component).toBeDefined());

  it("When filter by category, specific products are returned", () => {
    component.category = "Chess";
    expect(component.getProducts().length).toBe(1);
    component.category = "Soccer";
    expect(component.getProducts().length).toBe(2);
    component.category = "Bike";
    expect(component.getProducts().length).toBe(0);
  })

});
