# Kishansearch

This is the README file for the Kishansearch project. It provides an overview of the project and instructions on how to use it.

## Description

Kishansearch is a web application built with the Next.js framework. It is deployed on Vercel and uses a PostgreSQL database to manage data. The application allows users to search the database and upload new data in Excel file format. It consists of two main pages:

- Search Page: Allows users to search the database based on specific criteria.
- Upload Page: Allows users to upload new data to the database in Excel file format. The first row of the file must follow a predefined format.

## Live Demo

A live demo of the application is available. Click on the [deployment link](#) to access the application. You will be redirected to the login page. Use the following test credentials:

- User ID: `test-user`
- Password: `test-password`

The search function is working properly with more than 200 example sets of data in the database. Currently, visitors don't have permission to upload Excel files into database due to limited memory in demo version, but the upload function is working properly and logs data in the console of the device for testing.

To enable uploading to the database instead of logging of Excel data, uncomment the upload function in the `/src/lib/actions.tsx` file in your code.

## Installation

To run the Kishansearch project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/kishansearch.git`
2. Install the necessary dependencies: `npm install`
3. Add database connections in `.env` file. Check `.env.example` for format.
4. Start the application: `npm run dev`
5. Checkout `scripts` in root directory for adding data to database.

## Usage

1. Access the application by navigating to `http://localhost:3000` in your web browser.
2. Use the search page to search the database based on specific criteria.
3. Use the upload page to upload new data to the database in Excel file format. Make sure the first row of the file follows the predefined format.

## Contributing

If you would like to contribute to the Kishansearch project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your commit message"`
4. Push your changes to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, please feel free to contact us at [email@example.com](mailto:email@example.com).
