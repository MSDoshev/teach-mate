export default function Register() {
  return (
    <div>
      <form action="" method="POST">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" name="age" id="age" required />
        </div>
        <div>
          <label htmlFor="grade">Grade</label>
          <input type="grade" name="grade" id="grade" required />
        </div>
        <div>
          <label htmlFor="school">School</label>
          <input type="school" name="school" id="school" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" autoComplete="nope"/>
        </div>
        {/*we need a repeat password block */}
        <button type="submit">Register</button>
        <p>Already have an account?</p>
        <button>Login</button>
      </form>
    </div>
  );
}
